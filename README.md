📦src
┣ 📂components
┃ ┣ 📂Error
┃ ┃ ┗ 📜index.error.tsx (Error-related components used for handling error states)
┃ ┣ 📂Loading
┃ ┃ ┗ 📜loading.component.tsx (Loading-related components used for handling loading states)
┃ ┗ 📜index.components.ts (Exports components from this folder)
┣ 📂constants
┃ ┣ 📜colors.constants.ts (Defines color constants used across the app)
┃ ┣ 📜index.constants.ts (Exports constants from this folder)
┃ ┗ 📜typography.constants.tsx (Defines typography-related constants such as font styles)
┣ 📂navigator
┃ ┣ 📜index.stackNavigator.tsx (Defines the stack navigator used for navigation)
┃ ┗ 📜navigator.tsx (Configures the overall navigation setup of the app)
┣ 📂network
┃ ┣ 📜index.network.ts (Exports networking functions from this folder)
┃ ┗ 📜useStockHoldings.ts (Contains custom hook(s) related to handling stock holdings data)
┣ 📂screens
┃ ┣ 📂Stocks-Holdings
┃ ┃ ┣ 📂components
┃ ┃ ┃ ┣ 📜footer.component.tsx (Component for the footer in the "Stocks-Holdings" screen)
┃ ┃ ┃ ┣ 📜header.component.tsx (Component for the header in the "Stocks-Holdings" screen)
┃ ┃ ┃ ┣ 📜index.components.tsx (Exports components from this folder)
┃ ┃ ┃ ┣ 📜stocksCard.component.tsx (Component for displaying individual stock cards)
┃ ┃ ┃ ┣ 📜stocksHoldingsList.component.tsx (Component for displaying the list of stock holdings)
┃ ┃ ┃ ┗ 📜stocksHoldingsWrapper.component.tsx (Component wrapper for the "Stocks-Holdings" screen)
┃ ┃ ┗ 📜stocksHoldings.screen.tsx (Main screen file for the "Stocks-Holdings" screen)
┃ ┗ 📜index.screens.ts (Exports screens from this folder)
┗ 📂utils
┃ ┣ 📜commonStyles.utils.ts (Contains common styles or style-related utility functions)
┃ ┣ 📜index.utils.ts (Exports utility functions from this folder)
┃ ┣ 📜math.utils.ts (Contains utility functions related to mathematical calculations)
┃ ┗ 📜stackParamList.utils.ts (Contains utility types/interfaces related to stack navigation parameters)
