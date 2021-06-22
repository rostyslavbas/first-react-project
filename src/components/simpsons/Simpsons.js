import Simpson from '../simpson/Simpson';

export default function Simpsons({items}) {
    // let {items} = props;
    // let {name, surname, age, photo, info} = items;

    // let {items:{name,surname,age,info,photo}} = props;
    return (
        <div className={'wrap'}>
            {
                items.map(value => <Simpson item={value}/>)
            }
        </div>
    );
}