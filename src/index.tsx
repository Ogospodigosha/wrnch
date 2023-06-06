import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "app/App";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
render(

    <HashRouter>
        <QueryClientProvider client={queryClient}>
        <App/>
        </QueryClientProvider>
    </HashRouter>

    ,
    document.getElementById('root')
)
