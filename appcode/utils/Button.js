import { Button } from 'react-native-elements';
export const CustomButton = (props) => {
    return (
        <Button
            onPress={props.onPress && props.onPress()}
            title={props.title}
            type="outline"
        />

    )
}
