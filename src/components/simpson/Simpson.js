import './Simpson.css';

export default function Simpson({item: {name, surname, age, info, photo}}) {

    // let {item} = props;
    // let {name, surname, age, photo, info} = item;

    // let {item:{name,surname,age,info,photo}} = props;


    return (
        <div className={'target'}>
            <h2>{name} {surname}</h2>
            <h3>{age} years old</h3>
            <img src={photo} alt=""/>
            <p>{info}</p>
        </div>
    );
}