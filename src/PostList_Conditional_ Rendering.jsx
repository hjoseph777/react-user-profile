{loading && <Loading />}
{error && <Error />}
{!loading && !error && <Posts />}
