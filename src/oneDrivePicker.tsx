import { ReactElement, useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useAccount, useMsal } from "@azure/msal-react";
import { GraphFileBrowser } from "@microsoft/file-browser";

const OneDrivePicker = (): ReactElement => {
    const loginRequest = {
        scopes: ["User.Read", 'Files.Read.All', 'Files.ReadWrite.All', 'Sites.Read.All', 'Sites.ReadWrite.All']
    }
    const { instance, accounts } = useMsal();
    const account = useAccount(accounts[0] || {});
    const handleClick = (): any => {
        instance.loginPopup(loginRequest);
    };
    const [token, setToken] = useState(null);

    const openOneDrive = (): any => {
        if (account) {
            instance.acquireTokenSilent({
                ...loginRequest,
                account: account
            }).then((response) => {
                console.log(response.accessToken);
                // callMsGraph(response.accessToken).then(response => setGraphData(response));
                setToken(response.accessToken as any);
            });
        };
    }

    const onPickSuccess = (response: any): any => {
        console.log(response);
    }

    return (
        <div>
            <button onClick={handleClick}>Pick from oneDrive</button>
            <button onClick={openOneDrive}>OpenDrive</button>
            {token &&
                <div style={{width: '50%', margin: 'auto'}}>
                    <GraphFileBrowser itemMode="all" selectionMode="single" onSuccess={onPickSuccess} getAuthenticationToken={(): any => Promise.resolve(token)} />
                </div>
            }
        </div>
    )
}

export default OneDrivePicker;