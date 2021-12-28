import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const song = {
  id: "1",
  uri: "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(null);
  const [position, setPosition] = useState<number>(null);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      // {
      //   uri: "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
      // },
      require("../../assets/lethergo.mp3"),
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    // play the song
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration == null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftContent}>
          <Image source={{ uri: song.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <AntDesign name="hearto" size={20} style={styles.iconText} />
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={20}
              style={styles.iconText}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
    </View>
  );
};

export default PlayerWidget;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 48,
    width: "100%",
    backgroundColor: "#353535",
    padding: 5,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "lightgrey",
    fontSize: 12,
  },
  artist: {
    color: "lightgrey",
    fontSize: 14,
  },
  iconText: {
    color: "lightgrey",
    margin: 10,
  },
  progress: {
    height: 2,
    backgroundColor: "#bcbcbc",
    position: "absolute",
    bottom: 0,
  },
});
