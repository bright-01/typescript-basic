interface PhoneNumberDictionary {
    [phone: string]: { // ['phone'] 랑 동일함.. 대신 key가 string으로 와야한다를 정의
        num: number; // key : value(number)
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
}

export  {
    Contact, PhoneType
}
