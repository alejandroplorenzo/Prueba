import { FunctionComponent } from "preact";

export type UserProps = {
  name: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string;
  photo: string;
  comments: comment[];
};

export type comment = {
  user: string;
  message: string;
}


const User: FunctionComponent<UserProps> = (props) => {
  const { name, age, sex, description, hobbies, photo} = props;
  return (
    <div class="userContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={photo} />
    </div>
  );
};

export default User;