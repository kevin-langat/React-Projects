const dummyApiRes = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showRandomColorGen: true,
  showAccordion: false,
  showTreeView: true,
  githubProfileFinder: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiRes)
      setTimeout(() => {
        resolve(dummyApiRes);
      }, 1000);
    else {
      reject('Some error occured, please try again');
    }
  });
}

export default featureFlagDataServiceCall;
