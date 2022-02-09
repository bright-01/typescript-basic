
/**
 * 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법
 * Pick
 * --> 특정 타입에서 몇개의 속성을 선택하여 타입을 정의 할 수 있다.
 *
 * */
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API
// function fetchProducts(): Promise<Product[]>{
    //...
// }

// 리스트와 상세를 받아 올때 속성이 다를수 있다.

interface ProductDetail {
    id:number;
    name: string;
    price: string
}
// function displayProductDetail(shoppingItem : ProductDetail){ // Product의 일부를 받는 경우는? 아래와 같이 Pick을 사용
type ShoppingItem = Pick<Product, 'id'| 'name'|'price'> // pick이라는 유틸리티 타입을 사용 한다.
function displayProductDetail(ShoppingItem : ProductDetail){ // Product의 일부를 받는 경우는?
    //...
}

/**
 * Omit
 * --> 오밋은 픽과 반대로 특정 타입에서 지정된 속성만 제거한 타입을 정의
 * */

interface AddressBook {
    name:string;
    phone:number;
    address:string;
    company:string
}

const phoneBook : Omit<AddressBook, 'address'> = {
    name : '폰',
    phone: 123,
    company: 'dd'
}

const test: Omit<AddressBook, 'name'|'company'> = {
    phone : 1,
    address: 'sdf'
}

/**
 * Partial
 * --> 특정 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의
 * */

// Product 타입의 특정 부분만 업데이트 한다.
// 인터페이스의 속성을 optional로 ..
interface updateProduct {
    id?: number;
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;

}
function updateProductItem1(productItem: updateProduct){
    // optional로 받는 경우
}

function updateProductItem2(productItem: Partial<Product>){
    // Partial로 하면 위와 같다
}

// Partial 구현
interface UserProfile {
    username : string;
    email : string;
    profilePhotoUrl : string;
}

// interface UpdateUserProfile {
//     username? : string;
//     email? : string;
//     profilePhotoUrl? : string;
// }

type UserProfileUpdate1 = {
    username? : UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl? : UserProfile['profilePhotoUrl'];
}

type UserProfileUpdate2 = {
    // 맵드 타입
    [p in 'username' | 'email' | 'profilePhotoUrl']? : UserProfile[p]
}

type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate3 = {
    [p in UserProfileKeys]? : UserProfile[p]
}

type Subset<T> = {
    [p in keyof T]?: T[p]
}