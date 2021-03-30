import './App.css';
import TextField from './component/TextField';
import ListItem from './component/ListItem';
import { useState, useEffect } from 'react';
import { API_URL } from './constants';
import { API_KEY, SEARCH_ENGINE_ID } from './config/API';
import useDebounce from './hooks/useDebounce'


function App() {
  const [searchText, setSearchText] = useState('');
  const [searchInfo, setSearchInfo] = useState([]);
  const debouncedValue = useDebounce(searchText, 500)

  useEffect(() => {
     if(!searchText) setSearchInfo([])
  }, [searchText])

  useEffect(() => {
    if(searchText) getSearchInfo()
  }, [debouncedValue])

  const getSearchInfo = () => {
    fetch(API_URL + new URLSearchParams({
      key: API_KEY ,
      cx: SEARCH_ENGINE_ID,
      q: searchText
    }))
    .then(async res => await res.json())
    .then(res => setSearchInfo(res))
  }

  const displaySearchList = () => {
    if(searchInfo?.items?.length) {
      return searchInfo?.items?.map((item, index) => {
       return <ListItem key={index} itemIndex={index} listItem={item} />
      })
    }
    return null
  }

  return (
    <div className="App">
      <TextField value={searchText} onChange={e => setSearchText(e.target.value)} />
      {displaySearchList()}
    </div>
  );
}

export default App;
