
// @ts-ignore
import GooglePicker from 'react-google-picker';
// @ts-ignore
import DropboxChooser from 'react-dropbox-chooser';
import React, { useState } from 'react';
import Routing from './modules/routing';
import './App.less';
import { GraphFileBrowser } from '@microsoft/file-browser';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import OneDrivePicker from './oneDrivePicker';

function App() {
  const API_KEY = 'AIzaSyBwSTY-BgwYSXOtlHEcPYP2JLpU6HHP3OY';
  const CLIENT_ID = '527597317079-jq1gq0n7lj7l7d89nvqqo85iu8tl945m.apps.googleusercontent.com';
  const [gToken, setGToken] = useState();
  // const CLIENT_SECRET = 'c0wI_5E5iUI4Uw9BcHhjzI5K';
  // const PROJECT_ID = 'secret-country-133623';
  // const scopes = 'https://www.googleapis.com/auth/drive.file';
  // const [imgUrl, setImgUrl] = useState([]);
  // const ms_access_token = `EwBwA8l6BAAU6k7+XVQzkGyMv7VHB/h4cHbJYRAAAX3xD5X7Qew6rPgmJzSn2hdpV1iVKGHFH+FdwjBYfe+1BiKxTrplhFXKJcqlHGe/eBuXY4jf2Ah3yY06rk+B2Tmy5D5+mHjoALGlHDeV1ZeLhs/F0dE0Otreu7KSdY62fc3dpxEqmnS3jcYhD+Pui9xPqnP1o/sRLUoA/Qx/iqOYpWimmZyneNNlVvnjS5rB58AAPFK+U3PQeMteHgEAGCvNMeKlOdpKp1T1oD5uUWxjXcMxZKTQba34P2qic5Qb0tF+VKfou5DP/BnOFVZz1ffjGce5H5qoFXw/QymlqveqUHH4uAHta/Py24kFv80/PDL1GEGX5inlKVGCIhlI6AkDZgAACJnIWmsiSsqQQAIuiT71s0jpq4OyqvwhGEG4+4oKj4MIx9vevfiWT/po8AO8PISPUqfygBdjV0T/LzH2MDXPGC3DlywAh+OeCx9AHLXXYa6Ytj7hozny7NeIRN1OnI7QMX8B2KzQc8/Ie1hSAcj2jr9phYVXU1UwkRKWS3VSAIjwtlcnVS7dn8i0UCLNVYtP5/FwbctfBvm9cZ7jsQnNfy2HvRqoAbjmPhMHslQrAA2XYiKDQPXHOKH2Tw2eBlaljY1V9KkcfRDamsCgPwhfZw15NTCIgZVCARZ9p3c4WBghd4N7vXEue7voCYgPx+XWjH7YqGBnGj++tArOXSYD5M/rWJR8GIg3s8qsjSvWtDf7S0rvLNl38NOLclc1onlxGazhxWaP+MU3K/G4xvZDrSkvztiUcB9EdCfnfl+6rW1udenuMweooCiFrZV0ABAfIECmo881vHZB+0lvAZdgD9BLvYZcvBlQwxRou2HTa/UMbm9GVy6fHwOnp0D9H3Wfv2cYy5zOWrysK3kYvpSvAk3KCEBufFN8IEaooA0xzIclikTbpd4F5D6KIQWdl1s3LUeYeL4r46RQi3JYJFQgJmkYkvGaqMvo7QDmTyBi0dI5GDGGbR+Rr0ovmMHdAnN2LZtPPE7ZkKZZkA/uYbX6oYSPDtJQFMJUy3Z9v+Tg6NKeDe861TnaeJ5qL4FLjgecAQDaf///mDmJCaU1g7ZLU2m9c0esqQHKJuO0Hda0BLILfxE1kkp+R9C/eWE6LQEDkfRfLwzoFZMuHLWEAg==`
  // const ms_auth_token = null;
  // const one_CLIENT_SECRET = 'A_joK_b1rcs_HSlD0QyQwiNIWWyIUO8-m5';
  // let oAuthToken: any = null;
  // let isPickerApiLoaded = false;
  // const onChangeGoogle = (data: any): any => {
  //   console.log(data, 'frmGoogle');
  //   if (data.action === 'picked') {
  //     setImgUrl(data.docs);
  //   }
  // }

  const dropboxChooser = (files: any): any => {
    console.log(files);
  }

  const loginToMs = (): any => {
    
  }
  const msalConfig: Configuration = {
    auth: {
        clientId: "5afb6bab-c147-4b2e-88eb-47d2b05c7d4e",
    }
};
  const msalInstance = new PublicClientApplication(msalConfig);

  const gFileChange = (data: any): any => {

  }

  // function downloadFile(file: any, callback: any) {
  //   if (file.downloadUrl) {
  //     var accessToken = gapi.auth.getToken().access_token;
  //     var xhr = new XMLHttpRequest();
  //     xhr.open('GET', file.downloadUrl);
  //     xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  //     xhr.onload = function() {
  //       callback(xhr.responseText);
  //     };
  //     xhr.onerror = function() {
  //       callback(null);
  //     };
  //     xhr.send();
  //   } else {
  //     callback(null);
  //   }
  // }

  return (
    <React.Fragment>
      {/* <div className="test">
        <span className="test1"></span>
      </div>
      <Routing/> */}



      <GooglePicker clientId={CLIENT_ID}
        developerKey={API_KEY}
        scope={['https://www.googleapis.com/auth/drive.readonly']}
        onChange={(data: any): any => gFileChange(data)}
        onAuthenticate={(token: any): any => { setGToken(token); console.log('oauth token:', token)}}
        onAuthFailed={(data: any): any => console.log('on auth failed:', data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
        query={''}
        viewId={'DOCS'}>
        <button>Pick from google</button>
      </GooglePicker>
      <DropboxChooser
        linkType="direct"
        appKey={'ml311g62gs9k8pl'}
        success={(files: any): any => dropboxChooser(files)}
        cancel={(data: any) => console.log('Cancel', data)}
        extensions={['.png']} >
        <button>Dropbox choose</button>
      </DropboxChooser>
      <MsalProvider instance={msalInstance}>
        <OneDrivePicker />
      </MsalProvider>



      {/* <button onClick={loginToMs}>oneDrive pick</button>
      {
        ms_access_token &&
        <GraphFileBrowser getAuthenticationToken={(): any => Promise.resolve(ms_access_token)} />
      }
      {
        imgUrl.length > 0 &&
        imgUrl.map((element: any): any => {
          return <img src={element.url} key={element.id} />
        })
      } */}

    </React.Fragment>
  );
}

export default App;
