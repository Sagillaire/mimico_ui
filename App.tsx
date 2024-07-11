import { useFont } from "./hooks";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, GlobalSheet, Input } from "./components";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  const { loaded, error } = useFont();

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <SafeAreaView style={GlobalSheet.container}>
      <View style={GlobalSheet.ViewContent}>
        <Text style={GlobalSheet.text}>Mimico COMPONENTS</Text>
        <StatusBar style="auto" />

        {/* TEST BUTTONS */}
        {/* <Button title="Botón" type="primary" />
        <Button title="Botón" type="secondary" />
        <Button title="Botón" type="brown" />
        <Button title="Botón" type="brownAccent" />
        <Button title="Botón" type="pink" /> */}

        {/* <Button title="Botón" type="primary" />
        <Button title="Botón" type="primary" dense />

        <Button title="Cerrar" type="primary" icon="door" dense />
        <Button type="primary" icon="door" dense color="primary" />

        <Button
          variant="text"
          type="primary"
          icon="door"
          dense
          color="primary"
        />
        <Button
          variant="outline"
          type="primary"
          icon="door"
          dense
          color="primary"
        />
        <Button
          variant="dashed"
          type="primary"
          icon="door"
          dense
          color="primary"
        />
        <Button
          variant="dashed"
          type="primary"
          icon="door"
          dense
          title="Button"
          color="primary"
        /> */}

        {/* ---------  INPUT ---------*/}
        <Input placeholder="Escribe tu texto" label="User" />
        <Input placeholder="Escribe tu texto" label="Email" />
        <Input placeholder="Escribe tu texto" label="Comments" isArea />
      </View>
    </SafeAreaView>
  );
}
