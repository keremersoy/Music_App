import React,{useState} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";
import music_data from "./data.json"

const App = () => {

const [songList,setSongList]=useState(music_data);

const renderSong=({item})=><SongCard song={item}/>

const renderSeperator=()=><View style={styles.seperator}/>

const handleSearch= text => {
  const filteredList=music_data.filter(song=>song.title.toLowerCase().includes(text.toLowerCase()));
  setSongList(filteredList);
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar style={styles.search_bar} onSearch={handleSearch}/>
        <FlatList
        keyExtractor={(item)=>item.id}
        data={songList}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}/>
      </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  },
  search_bar:{

  }
});

export default App;
