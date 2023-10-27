import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 20,
  },
  inputHalf: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  button: {
    width: '45%',
  },
});
