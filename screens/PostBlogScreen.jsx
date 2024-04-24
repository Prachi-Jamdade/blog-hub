import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { createMediumBlogPost } from "../Components/Medium";
import { Colors } from "../Utils/Color";
import { Fonts } from "../Utils/Fonts";
import { createDevToBlogPost } from "../Components/DevTo";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PostBlogScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagsChange = (text) => {
    const newTags = text.split(",").map((tag) => tag.trim());
    setTags(newTags);
  };

  const handlePost = () => {
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Tags:", tags);
  };

  const handleMediumPost = () => {
    try {
      const res = createMediumBlogPost(title, content, tags);

      if (res) {
        console.log("Blog posted successfully:", res.data);
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  const handleDevToPost = () => {
    try {
      const res = createDevToBlogPost(title, content, tags);

      if (res) {
        console.log("Blog posted successfully:", res.data);
        setTitle("");
        setContent("");
        s;
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={[
          styles.input,
          { height: screenHeight * 0.3, width: screenWidth * 0.9 },
        ]}
        placeholder="Enter content"
        multiline={true}
        numberOfLines={10}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Text style={styles.label}>Tags</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter tags separated by commas"
        value={tags.join(", ")} // Display tags as comma-separated string
        onChangeText={handleTagsChange}
      />

      <TouchableOpacity style={styles.postButton} onPress={handleDevToPost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
    fontFamily: Fonts.poppins_regular,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gold_outline,
    borderRadius: 5,
    padding: 10,
    color: "#fff",
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: Colors.gold,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  postButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: Fonts.poppins_semiBold,
  },
});

export default PostBlogScreen;
