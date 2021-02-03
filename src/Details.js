import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

class Details extends React.Component {
    state = { loading: true };

    constructor(props) {
        super(props); // if you dont do this react will yell at you

        this.state = {
            loading: true
        };
    }

    componentDidMount () {
        pet.animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    locations: `${animal.contact.address.city}, 
                    ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                });
            }, console.error);
    }
    render () { // class component should have render function

        if(this.state.loading) {
            return <h1>loading...</h1>
        }

        const { animal, breed, location, description, name, media } = this.state;

        return (
            <div className="details">
                <Carousel media = {media}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} = ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            {/* props spreading */}
            <Details {...props}/> 
        </ErrorBoundary>
    )
};