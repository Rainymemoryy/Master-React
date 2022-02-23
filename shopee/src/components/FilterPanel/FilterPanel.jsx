import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStar from '../RatingStar/RatingStar'
import * as S from './filterPanel.style'

export default function FilterPanel() {
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
                <S.CategoryItem>
                    <NavLink to=''>Quần áo</NavLink>
                </S.CategoryItem>
                <S.CategoryItem>
                    <NavLink to=''>Quần áo</NavLink>
                </S.CategoryItem>
                <S.CategoryItem>
                    <NavLink to=''>Quần áo</NavLink>
                </S.CategoryItem>
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
