import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStar from '../RatingStar/RatingStar'
import * as S from './filterPanel.style'
import PropTypes from 'prop-types'
import qs from 'query-string'

export default function FilterPanel({ categories }) {
    const location = useLocation()

    const handleActiveClassCategoryItem = category => {
        const query = qs.parse(location.search)
        return query.category === category._id ? 'active' : ''
    }
    return (
        <div>
            <S.CategoryTitleLink to={path.home}>
                <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='shopee-svg-icon '>
                    <g>
                        <polyline
                            fill='none'
                            points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeMiterlimit={10}
                        />
                    </g>
                </svg>
                Tất cả danh mục
            </S.CategoryTitleLink>

            <S.CategoryList>
                {categories.map(category => (
                    <S.CategoryItem key={category._id}>
                        <Link
                            to={path.home + `?category=${category._id}`}
                            className={handleActiveClassCategoryItem(category)}
                        >
                            {category.name}
                        </Link>
                    </S.CategoryItem>
                ))}
            </S.CategoryList>

            <S.CategoryTitle>
                <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='shopee-svg-icon '>
                    <g>
                        <polyline
                            fill='none'
                            points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeMiterlimit={10}
                        />
                    </g>
                </svg>
                Bộ lọc tìm kiếm
            </S.CategoryTitle>

            <S.FilterGroup>
                <S.FilterGroupHeader>Khoảng giá</S.FilterGroupHeader>
                <S.PriceRange>
                    <S.PriceRangeGroup>
                        <S.PriceRangeInput placeholder='Từ'></S.PriceRangeInput>
                        <S.PriceRangeLine />
                        <S.PriceRangeInput placeholder='Đến'></S.PriceRangeInput>
                    </S.PriceRangeGroup>
                    <S.PriceErrorMessage>Vui lòng điền khoảng giá phù hợp</S.PriceErrorMessage>
                    <S.PriceRangeButton>Áp dụng</S.PriceRangeButton>
                </S.PriceRange>
            </S.FilterGroup>

            <S.FilterGroup>
                <S.FilterGroupHeader>Đánh giá</S.FilterGroupHeader>
                <RatingStar />
            </S.FilterGroup>

            <S.RemoveFilterButton>Xoá tất cả</S.RemoveFilterButton>
        </div>
    )
}

FilterPanel.prototype = {
    categories: PropTypes.array.isRequired
}
