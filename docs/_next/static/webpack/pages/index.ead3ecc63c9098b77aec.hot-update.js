webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
    startedAt: '2026-03',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '업무 보고 프로세스 자동화',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)'
      }, {
        content: '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선'
      }, {
        content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현'
      }]
    }, {
      content: '도메인 지식 축적 체계 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환'
      }, {
        content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화'
      }, {
        content: '현재 1개 팀 대상 시범 운영 중'
      }]
    }]
  }, {
    title: '롯데손해보험 고지정보 자동입력',
    startedAt: '2026-01',
    endedAt: '2026-02',
    where: '롯데손해보험',
    descriptions: [{
      content: '고지정보 자동입력 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '질병별 공통질문·추가질문으로 구성된 고지정보를 수기 입력에서 사고이력 데이터 기반 자동입력으로 전환하는 기능 개발'
      }, {
        content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영'
      }, {
        content: '개발부터 테스트, 운영 반영까지 단독 수행'
      }]
    }, {
      content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어'
      }, {
        content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '자동입력 도입으로 현업 건당 입력 시간 50% 이상 단축'
      }, {
        content: '기존 잘못된 입력으로 인한 심사 반려 케이스를 유효성 검증 로직으로 차단'
      }]
    }]
  }, {
    title: 'DB생명 질병심사 기능 개선',
    startedAt: '2025-09',
    endedAt: '2025-12',
    where: 'DB생명',
    descriptions: [{
      content: '질병심사 기능 대응 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 2,400만 건 테이블에 신규 상품 데이터 4,500만 건 추가 필요 — 단일 테이블 구조의 한계를 판단하여 LIST 파티션 재설계 제안 및 적용'
      }, {
        content: '상품 코드 기반 LIST 파티션으로 분리하여, 기존 소스 및 쿼리 수정을 최소화하면서 구조 전환'
      }, {
        content: '데이터 적재 전 중복·정합성 검증 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '6,900만 건 규모 테이블을 상품 단위로 분리하여 유지보수성 확보'
      }, {
        content: '신규 상품 추가 시 파티션 추가만으로 대응 가능한 확장 구조 확보'
      }, {
        content: '기존 쿼리 변경 없이 구조 전환 완료'
      }]
    }]
  }, {
    title: 'KB Life 질병심사 기능 개선',
    startedAt: '2025-07',
    endedAt: '2025-08',
    where: 'KB Life',
    descriptions: [{
      content: '질병심사 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '신규 건강 상품 출시에 따라 5년/10년 시나리오 판을 분리하여 질병심사 기능 개발'
      }, {
        content: '신정원 데이터 및 기존 심사 소스 분석부터 시작하여, 기존 구조를 재활용한 설계로 개발 기간 단축'
      }, {
        content: '현업 커뮤니케이션 지원을 받으며, 개발부터 운영 반영까지 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '사전 도메인 지식 없이 투입되어, 소스 분석부터 운영 반영까지 2주 내 완료 — 상품 출시 일정 납기 준수'
      }]
    }]
  }, {
    title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
    startedAt: '2024-08',
    endedAt: '2025-06',
    where: '하나생명',
    descriptions: [{
      content: '콘텐츠 배포 기능',
      weight: 'MEDIUM',
      descriptions: [{
        content: '개발계 → 테스트계 → 운영계 콘텐츠 배포 기능 설계 및 개발 (약 250만 건 규모)'
      }, {
        content: '선택적 배포, 결재, 예약 배포 기능 구현'
      }, {
        content: '단건 SELECT → 1,000건 배치 처리 전환으로 대용량 배포 성능 대폭 단축'
      }, {
        content: '솔루션 전체 콘텐츠가 한 화면에 로딩되는 구조로 인해 초기 로딩이 느린 문제를 비동기 처리로 개선'
      }]
    }, {
      content: '게시판 / 통계 화면',
      weight: 'MEDIUM',
      descriptions: [{
        content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징'
      }, {
        content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '250만 건 규모 배포를 단건 → 배치 처리로 전환하여 처리 시간 대폭 단축, DB 부하 감소'
      }, {
        content: 'DBA 의존 없이 개발팀 자체 운영 배포 가능한 체계 구축'
      }]
    }]
  }, {
    title: 'The KE 프로파일 및 장비 관리 시스템',
    startedAt: '2024-03',
    endedAt: '2024-07',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '사내 인력·장비 관리 시스템 구축 (사용 대상 약 50~100명)',
      weight: 'MEDIUM',
      descriptions: [{
        content: '이력서 수정 승인, 관리자 메뉴, 사용자 권한 관리, 로그 관리(AOP, Logback) 개발'
      }, {
        content: '실시간 서버 자원 모니터링 기능 구현'
      }, {
        content: 'Docker Compose + Jenkins 기반 빌드·배포 환경을 주도하여 구축 — 이후 프로젝트에서도 재활용'
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFk7QUFIaEIsS0FEWSxFQVVaO0FBQ0VBLGFBQU8sRUFBRSxzQ0FEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlk7QUFIaEIsS0FWWSxFQWtCWjtBQUNFQSxhQUFPLEVBQUUsSUFEWDtBQUVFQyxZQUFNLEVBQUUsTUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlk7QUFIaEIsS0FsQlk7QUFMaEIsR0FqQ0ksRUFrRUo7QUFDRUosU0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VLLFdBQU8sRUFBRSxTQUhYO0FBSUVKLFNBQUssRUFBRSxNQUpUO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZUFEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBRFksRUFVWjtBQUNFQSxhQUFPLEVBQUUsSUFEWDtBQUVFQyxZQUFNLEVBQUUsTUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBVlk7QUFMaEIsR0FsRUksRUE0Rko7QUFDRUosU0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VLLFdBQU8sRUFBRSxTQUhYO0FBSUVKLFNBQUssRUFBRSxTQUpUO0FBS0VDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsWUFEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBRFksRUFVWjtBQUNFQSxhQUFPLEVBQUUsSUFEWDtBQUVFQyxZQUFNLEVBQUUsTUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWTtBQUhoQixLQVZZO0FBTGhCLEdBNUZJLEVBb0hKO0FBQ0VKLFNBQUssRUFBRSw2QkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsTUFKVDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLFdBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWSxFQUlaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSlk7QUFIaEIsS0FEWSxFQVdaO0FBQ0VBLGFBQU8sRUFBRSxhQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWTtBQUhoQixLQVhZLEVBbUJaO0FBQ0VBLGFBQU8sRUFBRSxJQURYO0FBRUVDLFlBQU0sRUFBRSxNQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWTtBQUhoQixLQW5CWTtBQUxoQixHQXBISSxFQXNKSjtBQUNFSixTQUFLLEVBQUUseUJBRFQ7QUFFRUMsYUFBUyxFQUFFLFNBRmI7QUFHRUssV0FBTyxFQUFFLFNBSFg7QUFJRUosU0FBSyxFQUFFLFlBSlQ7QUFLRUMsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLGFBQU8sRUFBRSxzQ0FEWDtBQUVFQyxZQUFNLEVBQUUsUUFGVjtBQUdFRixrQkFBWSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BRlksRUFHWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhZO0FBSGhCLEtBRFk7QUFMaEIsR0F0Skk7QUFGMEIsQ0FBbEM7QUE0S2VQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhZDNlY2M2M2M5MDk4Yjc3YWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0L0lQcm9qZWN0JztcclxuXHJcbmNvbnN0IHByb2plY3Q6IElQcm9qZWN0LlBheWxvYWQgPSB7XHJcbiAgZGlzYWJsZTogZmFsc2UsXHJcbiAgbGlzdDogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+yXheustCDrs7Tqs6Ag7J6Q64+Z7ZmUIOuwjyDrj4TrqZTsnbgg7KeA7IudIOy2leyggSDssrTqs4Qg6rWs7LaVJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMycsXHJcbiAgICAgIHdoZXJlOiAn7L2U66as7JWE7JeR7Iqk7Y287Yq4KOyjvCknLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7JeF66y0IOuztOqzoCDtlITroZzshLjsiqQg7J6Q64+Z7ZmUJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IFBQVCDquLDrsJgg7JeF66y0IOuztOqzoCDrsI8g7IiY7J6R7JeFIOy3qO2VqSDtlITroZzshLjsiqTrpbwgTm90aW9uIOyekOuPme2ZlOuhnCDsoITtmZggKOuMgOyDgSDslb0gMjXrqoUpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICftjIDsm5AgUFBU66W8IOqwnOuzhCDsl7TslrQg67O17IKswrfsoJXrpqztlZjrjZgg6rSA66as7J6QIOy3qO2VqSDsnpHsl4XsnYQg7KCc6rGw7ZWY6rOgLCBOb3Rpb24g7J6Q64+ZIOy3qO2VqSArIOy9lOupmO2KuCDrsKnsi53snLzroZwg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdDbGF1ZGUgQVBJ66W8IO2ZnOyaqe2VmOyXrCDrs7Tqs6Ag7LSI7JWIIOuwjyDst6jtlakg7LSI7JWIIOyekOuPmSDsg53shLEg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn64+E66mU7J24IOyngOyLnSDstpXsoIEg7LK06rOEIOq1rOy2lScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+y2leyggeuQnCDsl4XrrLQg642w7J207YSw66W8IOq4sOuwmOycvOuhnCBDbGF1ZGUgQVBJ66W8IO2ZnOyaqe2VnCDrj4TrqZTsnbgg7KeA7IudIOy0iOyViCDsnpDrj5kg7IOd7ISxIOyytOqzhCDqtazstpUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqtIDrpqzsnpAg7IiY7J6R7JeFIOy3qO2VqSDsl4XrrLQg7KCc6rGwIOKAlCBOb3Rpb24g7J6Q64+ZIOy3qO2VqeycvOuhnCDsoITtmZgnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0NsYXVkZSBBUEkg7Jew64+Z7Jy866GcIOuztOqzoMK37Leo7ZWpwrfsp4Dsi50g7LSI7JWIIOyekeyEsSDsnpDrj5ntmZQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2YhOyerCAx6rCcIO2MgCDrjIDsg4Eg7Iuc67KUIOyatOyYgSDspJEnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+uhr+uNsOyGkO2VtOuztO2XmCDqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNi0wMScsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI2LTAyJyxcclxuICAgICAgd2hlcmU6ICfroa/rjbDshpDtlbTrs7Ttl5gnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6rOg7KeA7KCV67O0IOyekOuPmeyeheugpSDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7KeI67OR67OEIOqzte2GteyniOusuMK37LaU6rCA7KeI66y47Jy866GcIOq1rOyEseuQnCDqs6Dsp4DsoJXrs7Trpbwg7IiY6riwIOyeheugpeyXkOyEnCDsgqzqs6DsnbTroKUg642w7J207YSwIOq4sOuwmCDsnpDrj5nsnoXroKXsnLzroZwg7KCE7ZmY7ZWY64qUIOq4sOuKpSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2YhOyXheqzvCDsp4HsoJEg7Luk666k64uI7LyA7J207IWY7ZWY66mwIOyalOq1rOyCrO2VrSDsoJXrpqwg67CPIOq4sOuKpSDrsJjsmIEnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwnOuwnOu2gO2EsCDthYzsiqTtirgsIOyatOyYgSDrsJjsmIHquYzsp4Ag64uo64+FIOyImO2WiScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6rO17Ya1IOyniOusuCDsnZHri7Xsl5Ag65Sw66W4IOy2lOqwgCDsp4jrrLgg7KCc7Ja0IOuwjyDsnKDtmqjshLEg6rKA7KadIOuhnOyngSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqs7XthrUg7KeI66y4IOydkeuLteyXkCDrlLDrnbwg7LaU6rCAIOyniOusuOydhCDrj5nsoIHsnLzroZwg7KCc7Ja0JyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsnKDtmqjshLEg6rKA7Kad7J2EIO2Gte2VtCDslYzrp57snYAg64u167OA66eMIOyeheugpeuQmOuPhOuhnSDsspjrpqwnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsnpDrj5nsnoXroKUg64+E7J6F7Jy866GcIO2YhOyXhSDqsbTri7kg7J6F66ClIOyLnOqwhCA1MCUg7J207IOBIOuLqOy2lScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IOyemOuqu+uQnCDsnoXroKXsnLzroZwg7J247ZWcIOyLrOyCrCDrsJjroKQg7LyA7J207Iqk66W8IOycoO2aqOyEsSDqsoDspp0g66Gc7KeB7Jy866GcIOywqOuLqCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnRELsg53rqoUg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzshKAnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA5JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMTInLFxyXG4gICAgICB3aGVyZTogJ0RC7IOd66qFJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg64yA7J2RIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q4sOyhtCAyLDQwMOunjCDqsbQg7YWM7J2067iU7JeQIOyLoOq3nCDsg4Htkogg642w7J207YSwIDQsNTAw66eMIOqxtCDstpTqsIAg7ZWE7JqUIOKAlCDri6jsnbwg7YWM7J2067iUIOq1rOyhsOydmCDtlZzqs4Trpbwg7YyQ64uo7ZWY7JesIExJU1Qg7YyM7Yuw7IWYIOyerOyEpOqzhCDsoJzslYgg67CPIOyggeyaqScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7IOB7ZKIIOy9lOuTnCDquLDrsJggTElTVCDtjIzti7DshZjsnLzroZwg67aE66as7ZWY7JesLCDquLDsobQg7IaM7IqkIOuwjyDsv7zrpqwg7IiY7KCV7J2EIOy1nOyGjO2ZlO2VmOuptOyEnCDqtazsobAg7KCE7ZmYJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrjbDsnbTthLAg7KCB7J6sIOyghCDspJHrs7XCt+ygle2VqeyEsSDqsoDspp0g7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnNiw5MDDrp4wg6rG0IOq3nOuqqCDthYzsnbTruJTsnYQg7IOB7ZKIIOuLqOychOuhnCDrtoTrpqztlZjsl6wg7Jyg7KeA67O07IiY7ISxIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug6recIOyDge2SiCDstpTqsIAg7IucIO2MjO2LsOyFmCDstpTqsIDrp4zsnLzroZwg64yA7J2RIOqwgOuKpe2VnCDtmZXsnqUg6rWs7KGwIO2ZleuztCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6riw7KG0IOy/vOumrCDrs4Dqsr0g7JeG7J20IOq1rOyhsCDsoITtmZgg7JmE66OMJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdLQiBMaWZlIOyniOuzkeyLrOyCrCDquLDriqUg6rCc7ISgJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNS0wNycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI1LTA4JyxcclxuICAgICAgd2hlcmU6ICdLQiBMaWZlJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iug6recIOqxtOqwlSDsg4Htkogg7Lac7Iuc7JeQIOuUsOudvCA164WELzEw64WEIOyLnOuCmOumrOyYpCDtjJDsnYQg67aE66as7ZWY7JesIOyniOuzkeyLrOyCrCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6DsoJXsm5Ag642w7J207YSwIOuwjyDquLDsobQg7Ius7IKsIOyGjOyKpCDrtoTshJ3rtoDthLAg7Iuc7J6R7ZWY7JesLCDquLDsobQg6rWs7KGw66W8IOyerO2ZnOyaqe2VnCDshKTqs4TroZwg6rCc67CcIOq4sOqwhCDri6jstpUnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2YhOyXhSDsu6TrrqTri4jsvIDsnbTshZgg7KeA7JuQ7J2EIOuwm+ycvOupsCwg6rCc67Cc67aA7YSwIOyatOyYgSDrsJjsmIHquYzsp4Ag7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7IKs7KCEIOuPhOuplOyduCDsp4Dsi50g7JeG7J20IO2IrOyeheuQmOyWtCwg7IaM7IqkIOu2hOyEneu2gO2EsCDsmrTsmIEg67CY7JiB6rmM7KeAIDLso7wg64K0IOyZhOujjCDigJQg7IOB7ZKIIOy2nOyLnCDsnbzsoJUg64Kp6riwIOykgOyImCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7ZWY64KY7IOd66qFIOygnDPrs7Ttl5gg7Iuc7Iqk7YWcIOq1rOy2lSAo7LKt7JW97Ius7IKsIOyekOuPme2ZlCknLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI0LTA4JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDYnLFxyXG4gICAgICB3aGVyZTogJ+2VmOuCmOyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsvZjthZDsuKAg67Cw7Y+sIOq4sOuKpScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwnOuwnOqzhCDihpIg7YWM7Iqk7Yq46rOEIOKGkiDsmrTsmIHqs4Qg7L2Y7YWQ7LigIOuwsO2PrCDquLDriqUg7ISk6rOEIOuwjyDqsJzrsJwgKOyVvSAyNTDrp4wg6rG0IOq3nOuqqCknIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yEoO2DneyggSDrsLDtj6wsIOqysOyerCwg7JiI7JW9IOuwsO2PrCDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfri6jqsbQgU0VMRUNUIOKGkiAxLDAwMOqxtCDrsLDsuZgg7LKY66asIOyghO2ZmOycvOuhnCDrjIDsmqnrn4kg67Cw7Y+sIOyEseuKpSDrjIDtj60g64uo7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfshpTro6jshZgg7KCE7LK0IOy9mO2FkOy4oOqwgCDtlZwg7ZmU66m07JeQIOuhnOuUqeuQmOuKlCDqtazsobDroZwg7J247ZW0IOy0iOq4sCDroZzrlKnsnbQg64qQ66awIOusuOygnOulvCDruYTrj5nquLAg7LKY66as66GcIOqwnOyEoCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn6rKM7Iuc7YyQIC8g7Ya16rOEIO2ZlOuptCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yalOq1rOyCrO2VreyXkCDrp57strAg6riw7KG0IOqyjOyLnO2MkCDtmZTrqbQg7Luk7Iqk7YSw66eI7J207KeVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsi6zsgqwg6rKw6rO866W8IOqwgSDtirnshLHsl5Ag66ee6rKMIOy0nSA26rCcIO2ZlOuptOycvOuhnCDqtazshLHtlZjsl6wg7KCc6rO1JyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnMjUw66eMIOqxtCDqt5zrqqgg67Cw7Y+s66W8IOuLqOqxtCDihpIg67Cw7LmYIOyymOumrOuhnCDsoITtmZjtlZjsl6wg7LKY66asIOyLnOqwhCDrjIDtj60g64uo7LaVLCBEQiDrtoDtlZgg6rCQ7IaMJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEQkEg7J2Y7KG0IOyXhuydtCDqsJzrsJztjIAg7J6Q7LK0IOyatOyYgSDrsLDtj6wg6rCA64ql7ZWcIOyytOqzhCDqtazstpUnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RoZSBLRSDtlITroZztjIzsnbwg67CPIOyepeu5hCDqtIDrpqwg7Iuc7Iqk7YWcJyxcclxuICAgICAgc3RhcnRlZEF0OiAnMjAyNC0wMycsXHJcbiAgICAgIGVuZGVkQXQ6ICcyMDI0LTA3JyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsgqzrgrQg7J2466ClwrfsnqXruYQg6rSA66asIOyLnOyKpO2FnCDqtazstpUgKOyCrOyaqSDrjIDsg4Eg7JW9IDUwfjEwMOuqhSknLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsnbTroKXshJwg7IiY7KCVIOyKueyduCwg6rSA66as7J6QIOuplOuJtCwg7IKs7Jqp7J6QIOq2jO2VnCDqtIDrpqwsIOuhnOq3uCDqtIDrpqwoQU9QLCBMb2diYWNrKSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLpOyLnOqwhCDshJzrsoQg7J6Q7JuQIOuqqOuLiO2EsOungSDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEb2NrZXIgQ29tcG9zZSArIEplbmtpbnMg6riw67CYIOu5jOuTnMK367Cw7Y+sIO2ZmOqyveydhCDso7zrj4TtlZjsl6wg6rWs7LaVIOKAlCDsnbTtm4Qg7ZSE66Gc7KCd7Yq47JeQ7ISc64+EIOyerO2ZnOyaqScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=