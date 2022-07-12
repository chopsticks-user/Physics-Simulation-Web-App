#include <emscripten/bind.h>
#include <emscripten.h>
#include <string>
#include <vector>

// float EMSCRIPTEN_KEEPALIVE sum() asm("sum");

using namespace emscripten;

std::vector<int> returnVectorData()
{
  std::vector<int> v(10, 1);
  return v;
}

std::map<int, std::string> returnMapData()
{
  std::map<int, std::string> m;
  m.insert(std::pair<int, std::string>(10, "This is a string."));
  return m;
}

float sum()
{
  float e = exp(1.0);
  float sum = 0.0;
  for (int i = 0; i < 20; i++)
  {
    sum += pow(e, i);
  }
  return sum;
}

class MyClass
{
public:
  MyClass(int x, std::string y)
      : x(x), y(y)
  {
  }

  void incrementX()
  {
    ++x;
  }

  int getX() const { return x; }
  void setX(int x_) { x = x_; }

  static std::string getStringFromInstance(const MyClass &instance)
  {
    return instance.y;
  }

private:
  int x;
  std::string y;
};

// Binding code
EMSCRIPTEN_BINDINGS(my_class_example)
{
  class_<MyClass>("MyClass")
      .constructor<int, std::string>()
      .function("incrementX", &MyClass::incrementX)
      .property("x", &MyClass::getX, &MyClass::setX)
      .class_function("getStringFromInstance", &MyClass::getStringFromInstance);
}

EMSCRIPTEN_BINDINGS(module)
{
  function("sum", &sum);
  function("returnVectorData", &returnVectorData);
  function("returnMapData", &returnMapData);

  // register bindings for std::vector<int> and std::map<int, std::string>.
  register_vector<int>("vector<int>");
  register_map<int, std::string>("map<int, string>");
}