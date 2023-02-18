import "./project.styles.scss";
import Title from "../../component/title component/title.component.jsx";
import Table from "../../component/Table component/table.component.jsx";
import tableData from "./tableData";
import { useEffect, useState } from "react";
import Paginations from "../../component/Pagination component/pagination.component";
import Filter from "../../component/filter component/filter.component";
import { FilterData } from "./filterData";
const Projects = () => {
  const [Post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  useEffect(() => {
    const fetchPost = async () => setPost(tableData);
    fetchPost();
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Post.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => setCurrentPage(number);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(Post.length / postPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="project-container">
      <Filter key={FilterData.id} filterArray={FilterData} />

      <div className="project-content">
        <Title text="Projects" />
        <div className="table-content">
          {currentPosts.map((post) => {
            return (
              <Table
                date={post.date}
                Auther={post.Auther}
                paragraph={post.paragraph}
                Supervisor={post.supervisor}
              />
            );
          })}
        </div>
        <div className="project-pagination">
          <Paginations
            postPerPage={postPerPage}
            totalPost={Post.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
