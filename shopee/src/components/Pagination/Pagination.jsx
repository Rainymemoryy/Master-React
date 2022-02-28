import React from 'react'
import * as S from './pagination.style'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { usePagination } from '@material-ui/lab'
import classNames from 'classnames'
import { path } from 'src/constants/path'
import qs from 'query-string'

export default function Pagination({ pagination, filters }) {
    const navigate = useNavigate()
    const { items } = usePagination({
        count: pagination.page_size,
        page: pagination.page || 1
    })

    const goToPrev = () => {
        const _filters = { ...filters, page: pagination.page - 1 }
        navigate(path.home + `?${qs.stringify(_filters)}`)
    }

    const goToNext = () => {
        const _filters = { ...filters, page: pagination.page + 1 }
        navigate(path.home + `?${qs.stringify(_filters)}`)
    }

    const goToPage = page => {
        const _filters = { ...filters, page: page }
        navigate(path.home + `?${qs.stringify(_filters)}`)
    }
    return (
        <div>
            <S.Pagination>
                {items.map(({ page, type, selected, disabled }, index) => {
                    let children = null
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (
                            <S.ButtonNoOutline disabled key={index}>
                                ...
                            </S.ButtonNoOutline>
                        )
                    } else if (type === 'previous') {
                        children = (
                            <S.ButtonIcon disabled={disabled} key={index} onClick={goToPrev}>
                                <svg
                                    enableBackground='new 0 0 11 11'
                                    viewBox='0 0 11 11'
                                    x={0}
                                    y={0}
                                    className='shopee-svg-icon icon-arrow-left'
                                >
                                    <g>
                                        <path d='m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z' />
                                    </g>
                                </svg>
                            </S.ButtonIcon>
                        )
                    } else if (type === 'next') {
                        children = (
                            <S.ButtonIcon disabled={disabled} key={index} onClick={goToNext}>
                                <svg
                                    enableBackground='new 0 0 11 11'
                                    viewBox='0 0 11 11'
                                    x={0}
                                    y={0}
                                    className='shopee-svg-icon icon-arrow-right'
                                >
                                    <path d='m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z' />
                                </svg>
                            </S.ButtonIcon>
                        )
                    } else {
                        children = (
                            <S.ButtonNoOutline
                                key={index}
                                className={classNames({ active: selected })}
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </S.ButtonNoOutline>
                        )
                    }
                    return children
                })}
            </S.Pagination>
        </div>
    )
}

Pagination.prototype = {
    pagination: PropTypes.object,
    filters: PropTypes.object
}
