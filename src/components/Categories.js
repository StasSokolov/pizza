import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import PropTypes from "prop-types";

const Categories = React.memo(({items, activeCategory}) => {
    const dispatch = useDispatch()

    const onSetActiveItem = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onSetActiveItem(null)}>Все</li>
                {
                    items && items.map((item, index) => {
                            return <li
                                className={activeCategory === index ? 'active' : ''}
                                onClick={() => onSetActiveItem(index)}
                                key={`${item}_${index}`}>{item}
                            </li>

                        }
                    )
                }
            </ul>
        </div>
    )
})

Categories.propTypes = {
    items: PropTypes.array.isRequired,
    activeCategory: PropTypes.number
};

Categories.defaultProps = {activeCategory: null, items: []}


export default Categories