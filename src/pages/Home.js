import React, {useCallback, useEffect} from "react";
import {Categories, Sort, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";
import {setSortBy} from "../redux/actions/filters";
import {addPizzaToCart} from "../redux/actions/cart";

const categories = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цена', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}]

const Home = () => {
    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])


    const onSelectSortType = useCallback((index) => {
        dispatch(setSortBy(index))
    }, [])

    const onAddPizzaToCart = (item) => {
        dispatch(addPizzaToCart(item))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categories}
                    activeCategory={category}/>
                <Sort activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((item) => {
                    return <PizzaBlock totalPizzaCount={cartItems[item.id] && cartItems[item.id].items.length} addPizzaToCart={onAddPizzaToCart} {...item} key={item.id}/>
                }) : Array(10)
                    .fill(null)
                    .map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    )
}

export default Home