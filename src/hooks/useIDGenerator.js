import { generator } from '../helpers/helpers';
const gen = generator();


export const useIDGenerator = () => {
  const genID = () => {
    return gen.next().value;
  }
  return [genID];
}
