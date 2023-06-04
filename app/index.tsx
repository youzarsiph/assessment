/**
 * Tabs
 */

import React from "react";
import * as SQLite from "expo-sqlite";
import * as SecureStore from "expo-secure-store";
import { FlatList, View } from "react-native";
import {
  Text,
  BottomNavigation,
  List,
  Searchbar,
  Chip,
  IconButton,
} from "react-native-paper";
import Styles from "../styles";
import { Hero, Screen } from "../components";
import { useRouter } from "expo-router";

const db = SQLite.openDatabase("little_lemon.db");

const Home = () => {
  /**
   * Home tab
   */

  const router = useRouter();
  const [reload, setReload] = React.useState(false);
  const [data, setData] = React.useState<
    {
      name: string;
      price: string;
      image: string;
      description: string;
    }[]
  >([]);

  const categories = ["Starters", "Mains", "Desserts", "Drinks"];

  React.useEffect(() => {
    (async () => {
      const x = await SecureStore.getItemAsync("data");

      if (x === null || x === "") {
        router.replace("/login");
      }
    })();

    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists food(name varchar(32), price varchar(6), description text, image varchar(32));",
        [],
        () => console.log("Table created"),
        (_, { message }) => {
          console.log(message);
          return true;
        }
      );

      tx.executeSql(
        "select * from food",
        [],
        (_, { rows }) => {
          rows._array.length === 0 ? setReload(!reload) : setData(rows._array);
        },
        (_, { message }) => {
          console.log(message);
          return true;
        }
      );
    });
  }, []);

  if (reload) {
    (async () => {
      await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
      )
        .then((response) =>
          response.ok ? response.json() : console.log(response)
        )
        .then((data) => {
          (async () => {
            data.menu.forEach(
              (i: {
                name: string;
                price: string;
                image: string;
                description: string;
              }) => {
                db.transaction((tx) =>
                  tx.executeSql(
                    `insert into food(name, price, description, image) values("${i.name}", "${i.price}", "${i.description}", "${i.image}")`,
                    [],
                    () => console.log(`${i} inserted`),
                    (_, { message }) => {
                      console.log(message);
                      return true;
                    }
                  )
                );
              }
            );
          })();
        });
    })();
  }

  return (
    <Screen options={{ title: "Little Lemon" }}>
      <View style={Styles.content}>
        <Hero />
        <Text variant="titleLarge">Order For Delivery</Text>
      </View>

      <View
        style={[
          Styles.content,
          { flexDirection: "row", gap: 8, paddingTop: 16 },
        ]}
      >
        {categories.map((item) => (
          <Chip key={item} onPress={() => {}}>
            {item}
          </Chip>
        ))}
      </View>

      <List.Section style={{ flex: 1 }} title="Menu">
        {data.length !== 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <List.Item
                  title={item.name}
                  description={item.description}
                  onPress={() => {}}
                  right={() => (
                    <List.Image
                      style={{ borderRadius: 10 }}
                      source={{
                        uri: `https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`,
                      }}
                    />
                  )}
                />
              );
            }}
          />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <IconButton
              size={56}
              icon={"wifi"}
              onPress={() => setReload(!reload)}
            />
          </View>
        )}
      </List.Section>
    </Screen>
  );
};

const Menu = () => {
  /**
   * Menu tab
   */

  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState<
    {
      name: string;
      price: string;
      image: string;
      description: string;
    }[]
  >([]);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        query === ""
          ? "select * from food"
          : `select * from food where name like '%${query}%'`,
        [],
        (_, { rows }) => setData(rows._array),
        (_, { message }) => {
          console.log(message);
          return true;
        }
      );
    });
  }, [query]);

  return (
    <Screen>
      <View style={[Styles.content, { paddingTop: 8 }]}>
        <Searchbar
          value={query}
          placeholder="Search"
          onChangeText={(value) => setQuery(value)}
        />
      </View>

      <List.Section title="Menu">
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <List.Item
                title={item.name}
                description={item.description}
                onPress={() => {}}
                right={() => (
                  <List.Image
                    style={{ borderRadius: 10 }}
                    source={{
                      uri: `https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true`,
                    }}
                  />
                )}
              />
            );
          }}
        />
      </List.Section>
    </Screen>
  );
};

const Tabs = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "menu",
      title: "Menu",
      focusedIcon: "menu",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    menu: Menu,
  });

  return (
    <BottomNavigation
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationType="shifting"
      navigationState={{ index, routes }}
    />
  );
};

export default Tabs;
