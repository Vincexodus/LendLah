import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const sampleTransactions = [
    {
      id: "1",
      date: "2024-06-01",
      customerName: "Alice",
      quantity: 5,
      amount: "$150.00",
    },
    {
      id: "2",
      date: "2024-06-01",
      customerName: "Bob",
      quantity: 3,
      amount: "$200.00",
    },
    {
      id: "3",
      date: "2024-06-02",
      customerName: "Charlie",
      quantity: 8,
      amount: "$300.00",
    },
    {
      id: "4",
      date: "2024-06-03",
      customerName: "Alice",
      quantity: 5,
      amount: "$250.00",
    },
    {
      id: "5",
      date: "2024-06-04",
      customerName: "Alex",
      quantity: 3,
      amount: "$550.00",
    },
    {
      id: "6",
      date: "2024-06-05",
      customerName: "Kenny",
      quantity: 8,
      amount: "$400.00",
    },
    {
      id: "7",
      date: "2024-06-05",
      customerName: "Chong",
      quantity: 3,
      amount: "$550.00",
    },
    // Add more transactions as needed
  ];

  return (
    <SafeAreaView className="bg-black-100 h-full">
      <FlatList
        // data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  British Shorthair
                </Text>
              </View>
            </View>
            <Image
              className=" align-center justify-center items-center "
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 1.6,
                marginTop: -10,
              }}
              source={images.whiteBoardDashboard}
            />
            <View className="flex flex-row justify-end">
              <Link
                href="/sales"
                className="text-base font-psemibold text-white"
              >
                View More
              </Link>
            </View>
            <TransactionTable transactions={sampleTransactions} />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const TransactionTable = ({ transactions }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderText, { flex: 0.5 }]}>ID</Text>
        <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Date</Text>
        <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Customer</Text>
        <Text style={[styles.tableHeaderText, { flex: 1.2 }]}>Quantity</Text>
        <Text style={[styles.tableHeaderText, { flex: 1.2 }]}>
          Total Amount
        </Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 0.5 }]}>{item.id}</Text>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>{item.date}</Text>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>
              {item.customerName}
            </Text>
            <Text style={[styles.tableCell, { flex: 1.2 }]}>
              {item.quantity}
            </Text>
            <Text style={[styles.tableCell, { flex: 1.2 }]}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: "#2D2D2D",
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#444",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  tableHeaderText: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    fontSize: 12,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  tableCell: {
    color: "#fff",
    textAlign: "right",
    fontSize: 12,
  },
});

export default Home;
