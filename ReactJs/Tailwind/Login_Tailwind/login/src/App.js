import './App.css';
import './index';
function App() {
  return (
      <body className='p-10 text-gray-800'>
       <section className='bg-purple-100 rounded-2xl p-5'>
          <div className='container mx-auto'>
            <div className='flex'>
              <a className='text-2xl font-bold pr-5 border-r mr-5 border-purple-300' href='index.html'>Agency</a>
              <div className='my-auto'>
                <ul className='flex font-bold text-gray-600'>
                  <li className='pr-5'><a className='px-3 py-2 border border-purple-100 hover:border-purple-300 rounded' href=''>Home</a></li>
                  <li className='pr-5'><a className='px-3 py-2 border border-purple-100 hover:border-purple-300 rounded' href=''>About</a></li>
                  <li className='pr-5'><a className='px-3 py-2 border border-purple-100 hover:border-purple-300 rounded' href=''>Service</a></li>
                  <li className='pr-5'><a className='px-3 py-2 border border-purple-100 hover:border-purple-300 rounded' href=''>Portfolio</a></li>
                  <li className='pr-5'><a className='px-3 py-2 border border-purple-100 hover:border-purple-300 rounded' href=''>Contact</a></li>
                </ul>
              </div>
              <a className='flex ml-auto text-medium px-3 py-2 font-bold bg-red-500 rounded' href='index.html'>
              <span className='px-2'>Get a Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
</a>
            </div>
          </div>
       </section>
    </body>
  );
}

export default App;
