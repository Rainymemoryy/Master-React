import React from 'react'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import * as S from './home.style'

export default function Home() {
    return (
        <div>
            <S.Container className='container'>
                <S.Side>
                    <FilterPanel />
                </S.Side>
                <S.Main>
                    <SearchItemResult />
                </S.Main>
            </S.Container>
        </div>
    )
}
