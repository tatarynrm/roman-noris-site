import axios from "axios";
export const sendMessageTelegram = (e) => {
  const ROMAN_TG = "282039969";
  const date = new Date();
  const messageSendDate = {
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
  };
  let mess = e.target.message.value;
  let newMessage = mess.replace(/\r?\n/g, ".");
  const userList = [ROMAN_TG];
  for (let i = 0; i < userList.length; i++) {
    const element = userList[i];
    const text = `<strong>Нове повідомлення:</strong>:%0A______________________%0A<i>Дата: ${messageSendDate.date}</i> %0A<i>Час: ${messageSendDate.time}</i> %0AІм'я: ${e.target.name.value} %0AE-mail: <code>${e.target.email.value}</code>%0AПовідомлення: <b>${newMessage}</b>`;
    const LINK = `https://api.telegram.org/bot${process.env.REACT_APP_TG_KEY}/sendMessage?chat_id=${element}&text=${text}&parse_mode=html`;
    axios.get(LINK);
  }
};
