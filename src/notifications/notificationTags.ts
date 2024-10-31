import { OneSignal } from "react-native-onesignal"

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Otávio Araújo",
    user_email: "otavio_araujo@hotmail.com",
  })
}
