
/**
 * 맵드 타입
 * */

type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroProfiles = { [K in Heroes]: number }; //Heroes 의 타입을 number으로 설정
const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
}