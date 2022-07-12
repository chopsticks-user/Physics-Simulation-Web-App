#include <emscripten/bind.h>
#include <emscripten.h>

using namespace emscripten;

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

EMSCRIPTEN_BINDINGS(module)
{
  function("sum", &sum);
}