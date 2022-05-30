import React, { useContext } from 'react';
import { Context } from '../../../../Context/context';
import { CategoriesTitle, CategoriesWrapper, Li, Select, SortBy, Ul } from './styled';

const Categories = () => {

  const { categories, filter, setFilter, setSort } = useContext(Context)

  const handleFilter = (value) => {
    setFilter(value === filter ? null : value)
  }

  const handleSort = (e) => {
    setSort(prev => prev = e.target.value)
  }

  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      <Ul>
        {categories.map((item, index) => (
          <Li
            focus={filter === item}
            onClick={() => handleFilter(item)}
            key={index}
          >
            {item}
          </Li>
        ))}
      </Ul>
      <SortBy>Sort by</SortBy>
      <Select onChange={handleSort} >
        <option value={"default"} selected>Default</option>
        <option value={"0 to ∞"}>Price from 0 to ∞</option>
        <option value={"∞ to 0"}>Price from ∞ to 0</option>
        <option value={"5 to 0"}>Rating from 5 to 0</option>
        <option value={"0 to 5"}>Rating from 0 to 5</option>
      </Select>
    </CategoriesWrapper>
  )
}

export default Categories