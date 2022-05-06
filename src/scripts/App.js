const HashRouter = ReactRouterDOM.HashRouter;

function App (props) {
    return (
        <HashRouter>
            <header>
                <HeaderMe />
                <HeaderMenu />
                <HeaderAbout />
            </header>
            <MainContent />
        </HashRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);