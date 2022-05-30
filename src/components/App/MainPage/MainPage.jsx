import React, { useContext } from 'react';
import Header from '../../Header/Header';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import { MainPageWrapper } from './styled';
import { Context } from '../../../Context/context';


const MainPage = () => {

    const { loading } = useContext(Context)

    return (
        <>
            {loading
                ?
                <div>Loading...</div>
                :
                <>
                    <Header />
                    <MainPageWrapper>
                        <Categories />
                        <Products />
                    </MainPageWrapper>
                </>
            }
        </>
    )
}

export default MainPage