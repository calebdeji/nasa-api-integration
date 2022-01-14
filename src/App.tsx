import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import Home from "app/views/Home";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<AppProvider i18n={enTranslations}>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</AppProvider>
	);
}

export default App;
