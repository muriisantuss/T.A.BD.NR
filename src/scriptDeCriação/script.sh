npx create-expo-app "$1" -t blank
cd "$1"
code . 
npx expo install react-native-web react-dom @expo/metro-runtime
npm run web


