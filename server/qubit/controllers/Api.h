#pragma once

#include <drogon/HttpSimpleController.h>

using namespace drogon;

class Api : public HttpSimpleController<Api>
{
  public:
    void asyncHandleHttpRequest(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) override;
    PATH_LIST_BEGIN
    // list path definitions here;
      PATH_ADD("/api", Post);
      PATH_ADD("/api", Options);
    PATH_LIST_END
};
