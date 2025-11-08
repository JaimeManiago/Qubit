/**
 *
 *  Cors.cc
 *
 */

#include "Cors.h"
#include <drogon/HttpResponse.h>

using namespace drogon;

void Cors::doFilter(
  const HttpRequestPtr &req,
  FilterCallback &&fcb,
  FilterChainCallback &&fccb
)
{
  auto resp = HttpResponse::newHttpResponse();
  resp->addHeader("Access-Control-Allow-Origin", "*");
  resp->addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, PATCH");
  resp->addHeader("Access-Control-Allow-Headers", "*"); // edit to strictly come from frontend
  resp->addHeader("Access-Control-Allow-Credentials", "true");

  if (req->method() == Options)
  {
    resp->setStatusCode(k200OK);
    fcb(resp);
    return;
  }
  fccb();
}