import Card from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { x } from './components/Dummy'

var options = {
  method: 'GET',
  url: 'https://reqres.in/api/users?page=2'
}

function App() {
  const [users, setusers] = useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try{
      let res = await axios.request(options)
      setusers(res.data.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderUsers = () => {
    return users.map(u => {
      return (
        <h1>{u.email}</h1>
      )
    })
  }

  return (
    <div style={{maxWidth: '1000px', margin:' 10px auto'}}>
      <div style={styles.columnContainer}>
        <Card header="About Me" flex={1}>
          <p>Hello World!</p>
        </Card>
        <Card header="About Me" flex={2}>
          <p>Hello World!</p>
        </Card>
        <Card header="About Me" flex={1}>
          <p>Hello World!</p>
        </Card>
      </div> 
      <Card header="About Me" flex={1}>
          <p>Hello World!</p>
      </Card>
      <Card header="Users" flex={1}>
          {renderUsers()}
      </Card>
    </div>
  );
}

const styles = {
  columnContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export default App;
