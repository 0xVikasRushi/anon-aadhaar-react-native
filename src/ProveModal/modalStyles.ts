import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  absolute: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  actionButton: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: '#06753b',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonGreen: {
    alignSelf: 'center',
    backgroundColor: '#3E3B3B',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonRound: {
    alignSelf: 'center',
    backgroundColor: '#06753B',
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  callout: {
    color: 'white',
    flexWrap: 'wrap',
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    width: 'auto',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  fieldToReveal: {
    alignItems: 'center',
    backgroundColor: '#3E3B3B',
    borderRadius: 4,
    flexDirection: 'row',
    height: 'auto',
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 18,
    width: '100%',
  },
  fieldToRevealContainer: {
    width: '100%',
  },
  fieldToRevealText: {
    color: 'white',
    fontFamily: 'Outfit-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  flatList: {
    flexGrow: 0,
  },
  footnote: {
    alignSelf: 'flex-start',
    color: '#B3ADAE',
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerQr: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
    width: '100%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'black',
    bottom: 0,
    elevation: 5,
    height: '70%',
    padding: 24,
    paddingBottom: 40,
    paddingTop: 40,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
  },
  proveButton: {
    alignItems: 'center',
    backgroundColor: '#06753B',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 15,
  },
  resultText: {
    color: '#E86A33',
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  scanQrButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3E3B3B',
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    marginVertical: 4,
    minHeight: 120,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    width: '100%',
  },
  scanQrIcon: {
    alignItems: 'center',
    backgroundColor: '#E93CAE',
    borderRadius: 8,
    height: 95,
    justifyContent: 'center',
    width: 95,
  },
  scanQrText: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    textAlign: 'left',
  },
  subhead: {
    color: '#B3ADAE',
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
  },
  textStyle: {
    color: '#F2AE7F',
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    textAlign: 'justify',
  },
  uploadPNGIcon: {
    alignItems: 'center',
    backgroundColor: '#203EBF',
    borderRadius: 8,
    height: 88,
    justifyContent: 'center',
    width: 88,
  },
});
