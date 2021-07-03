import React, { Component } from 'react';
import './List.css';
import ReactPaginate from 'react-paginate';

export class List extends Component {
    static displayName = List.name;
    constructor(props) {
        super(props);

        this.handlePageChangeClick = this.handlePageChangeClick.bind(this);

        this.state = {
            loadError: false,
            loading: true,
            gameData: [],
            tableData: [],
            tableDataSplit: [],
            tableOffset: 0,
            gamesPerPage: 1,
            currentPage: 0,
            pageCount: 0
        }
    }

    handlePageChangeClick = (e) => {
        const newPage = e.selected;
        const offset = Math.ceil(newPage * this.state.gamesPerPage);

        this.setState({
            currentPage: newPage,
            tableOffset: offset
        }, () => {
            this.fetchMoreEntries();
        });
    };

    fetchMoreEntries() {
        const localData = this.state.tableData;
        const tableSlice = localData.slice(this.state.tableOffset, this.state.tableOffset + this.state.gamesPerPage);

        this.setState({
            tableDataSplit: tableSlice
        })
    }

    componentDidMount() {
        try {
            this.populateGamesList();
        } catch {
            this.setState({ loadError: true });
        }
    }

    static renderGamesList = (games) => {

        return (
            <table className='content-table' width="1100">
                <thead>
                    <tr>
                        <th width="20%">Title</th>
                        <th width="70%">Details</th>
                        <th width="10%"></th>

                    </tr>
                </thead>
                <tbody>
                    {games.map(game =>
                        <tr key={game.id}>
                            <td height="120">
                                {game.title}
                            </td>
                            <td height="120">
                            </td>
                            <td height="120">
                                <a href={"Edit?ID=" + game.id}>Edit</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        if (this.state.loadError) {
            return (
                <h1>Load Error, WIP</h1>
            );
        }

        let contents = this.state.loading
            ? <p><em>Loading Contents...</em></p>
            : List.renderGamesList(this.state.tableDataSplit);
        return (
            <>
                <div>
                    <div className="Header">
                        <h1 id="GameTableHead">My Games</h1>
                    </div>
                    {contents}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageChangeClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </>
        );
    }

    async populateGamesList() {
        const response = await fetch('listgame');
        const data = await response.json();
        this.setState({
            gameData: data
        });

        var slice = data.slice(this.state.tableOffset, this.state.tableOffset + this.state.gamesPerPage);

        this.setState({
            pageCount: Math.ceil(this.state.gameData.length / this.state.gamesPerPage),
            tableData: this.state.gameData,
            tableDataSplit: slice,
            tableOffset: this.state.tableOffset + this.state.gamesPerPage,
            loading: false
        });
    }


}