import { View, Text, StatusBar } from 'react-native';
import Cats from './comp/Cats';
import Cat from './comp/Cat';


const App = () => {
  let answer = 'я голодний!! :('
  let answers = 'я сытый :))'
  return (
    <View>
      <Text>Catcafe: </Text>
      <Text>Hello, my name is <Cat name = 'Mimishka'/> {answer}</Text>
      <Text><Cats weight = {0.5} hunger = {0.5} thirst = {0.5}/></Text>
      <Text>Hello, my name is <Cat name = 'Mimushka'/> {answers}</Text>
      <Text><Cats weight = {1} hunger = {1} thirst = {1}/></Text>
      <Text>Hello, my name is <Cat name = 'Mimushika'/> {answer}</Text>
      <Text><Cats weight = {1} hunger = {0.5} thirst = {1}/></Text>
      <StatusBar hidden></StatusBar>
      </View>
  );
}

export default App;
