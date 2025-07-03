function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <h1 className="text-3xl font-bold text-center m-4">HMR Test</h1> {/* Add this */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
