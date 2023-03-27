import { IBirth } from "../../../feature/interfaces/home-page-interfaces";

export interface IProps {
    people: IBirth[]
    isFavButtonReq: boolean;
    addToFav(index: number): void;
}

const KinaxisList = (props: Partial<IProps>) => {
	return (
        <>
       { (props.people ?? []).map((person: IBirth, index) => (
			<article key={index} className="person">
				<div>
					<h4 id="person-text">{person.text}</h4>
					<p>{person.year} Born </p>
                    { props.isFavButtonReq && <button onClick ={() => props.addToFav && props.addToFav(index)}>Add to favourites</button> }
				</div>
			</article>
    ))
}
       </>
    )
}
export default KinaxisList;