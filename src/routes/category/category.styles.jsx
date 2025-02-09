import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 3.5rem;
  margin: 0 auto 30px;
  text-transform: uppercase;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
/* 
.category-container{
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
}
.category-title {
	font-size: 3.5rem;
	margin: 0 auto 30px;
	text-transform: uppercase;
	text-align: center;
  }
 */
