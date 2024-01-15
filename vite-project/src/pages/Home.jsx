import CompanyList from "../components/CompanyList";
import TagList from "../components/TagList";
import Search from "../components/Search";

const Home = () => {

    return (
        <>
            <Search />
            <TagList />
            <CompanyList />
        </>
    );
};

export default Home;
