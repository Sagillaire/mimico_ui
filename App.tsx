import { useFont } from "./hooks";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Button, Checkbox, GlobalSheet, Input, Radio } from "./components";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";

export default function App() {
  const { loaded, error } = useFont();

  const image = require("./assets/mimico_background.png");

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <SafeAreaView style={GlobalSheet.container}>
      <ImageBackground style={GlobalSheet.image} source={image}>
        <View style={GlobalSheet.ViewContent}>
          <Text style={GlobalSheet.text}>Mimico COMPONENTS</Text>
          <StatusBar style="auto" />

          {/* --------- TEST BUTTONS --------- */}
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

          {/* ---------  INPUT --------- */}
          {/* <Input placeholder="Mimico username" label="User" />
          <Input placeholder="Mimico email" label="Email" />
          <Input placeholder="Share your oppinion..." label="Comments" isArea /> */}

          {/* --------- RADIO --------- */}
          {/* <Radio
            options={[
              { label: "Peru", value: 1 },
              { label: "Colombia", value: 2 },
              { label: "Argentina", value: 3 },
            ]}
          /> */}

          {/* --------- CHECKBOX --------- */}
          <Checkbox
            options={[
              { label: "Lechuga", value: 1 },
              { label: "Tomate", value: 2 },
              { label: "Queso", value: 3 },
            ]}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
