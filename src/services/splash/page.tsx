import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SplashType } from "../../types/splashType";

export default function SplashComponent({ onComplete }: SplashType) {

    const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if(status.isLoaded){
            if(lastStatus.isLoaded !== status.isLoaded){
                hideAsync();
            }

            if(status.didJustFinish){
                onComplete(true);
            }
        }

        setStatus(() => status);
    }

    return (
        <Video 
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/splash.mp4')}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay
        />
    )
}